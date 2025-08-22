function quizApp() {
  return {
    currentStep: 0,
    totalSteps: 6,
    steps: Array.from({ length: 7 }, (_, i) => i),

    get progressWidth() {
      return (this.currentStep / this.totalSteps) * 100;
    },

    nextStep() {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    },
    goToPreviousStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },

    selectedGender: [],
    selectedType: "",
    selectedFrameSize: "",
    selectedFaceShape: "",
    selectedMaterial: "",
    selectedColors: [],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Grey", hex: "#969396" },
      { name: "Blue", hex: "#3575c4" },
      { name: "Green", hex: "#447d2c" },
      { name: "Purple / Violet", hex: "#800080" },
      { name: "Red", hex: "#FF0000" },
      { name: "Brown", hex: "#662505" },
      {
        name: "Tortoise",
        image:
          "https://www.spex4less.com/media/mf_webp/png/media/wysiwyg/quiz/tortoise.webp",
      },
      {
        name: "Crystal",
        image:
          "https://www.spex4less.com/media/mf_webp/png/media/wysiwyg/quiz/clear.webp",
      },
      { name: "Gold", hex: "#d3aa31" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    faceShapes: {
      Oval: ["Oversized", "Wayfarer", "Aviator"],
      Round: ["Regular", "Square", "Clubmaster"],
      Square: ["Oval", "Round", "Cateye"],
      Heart: ["Cateye", "Round", "Oval"],
      Diamond: ["Oval", "Cateye", "Regular"],
      Rectangular: ["Round", "Oval", "Aviator"],
    },
    recommendedStyles: [],

    selectGender(gender) {
      this.selectedGender = gender; // Set as string, not push to an array
      this.nextStep();
    },

    selectType(type) {
      this.selectedType = type;
      this.nextStep();
    },
    selectFrameSize(size) {
      this.selectedFrameSize = size;
      this.nextStep();
    },
    selectFaceShape(shape) {
      this.selectedFaceShape = shape;
      this.updateRecommendedStyles();
      this.nextStep();
    },

    selectMaterial(material) {
      this.selectedMaterial = material;
      // Ensure that the next step is specifically step 6
      this.currentStep = 5;
    },
    toggleColorSelection(color) {
      const index = this.selectedColors.indexOf(color);
      if (index > -1) {
        this.selectedColors.splice(index, 1); // Remove if already selected
      } else {
        this.selectedColors.push(color); // Add if not already selected
      }
    },

    updateRecommendedStyles() {
      if (this.selectedFaceShape) {
        this.recommendedStyles = this.faceShapes[this.selectedFaceShape];
      }
    },
    buildAndNavigateToResultsUrl() {
      const url = this.buildResultsUrl();
      window.location.href = url; // Navigates in the current tab
    },

    buildResultsUrl() {
      const baseUrl = `https://www.spex4less.com${this.getUrlPrefix()}?`;
      const params = [
        this.getGenderQueryParam(),
        this.getStylesQueryParam(),
        `width=${encodeURIComponent(this.selectedFrameSize)}`,
        this.getColorQueryParam(),
        this.getMaterialQueryParam(),
      ]
        .filter(Boolean) // Ensures that empty strings or null values are not included
        .join("&");
      return `${baseUrl}${params}`;
    },
    getUrlPrefix() {
      switch (this.selectedType) {
        case "Glasses":
          return "/glasses";
        case "Sunglasses":
          return "/sunglasses";
        case "Both":
          return "/all-frames";
        default:
          return ""; // Ensure default is handled correctly
      }
    },
    getGenderQueryParam() {
      if (this.selectedGender) {
        return `a1_frame_gender%5B0%5D=${encodeURIComponent(
          this.selectedGender,
        )}`;
      }
      return "";
    },

    getStylesQueryParam() {
      if (this.recommendedStyles.length > 0) {
        return this.recommendedStyles
          .map(
            (style, index) =>
              `a1_frame_style%5B${index}%5D=${encodeURIComponent(style)}`,
          )
          .join("&");
      }
      return "";
    },
    getColorQueryParam() {
      return this.selectedColors
        .map(
          (color, index) =>
            `color%5B${index}%5D=${encodeURIComponent(color)}`,
        )
        .join("&");
    },
    getMaterialQueryParam() {
      return this.selectedMaterial
        ? `a1_frame_material=${encodeURIComponent(this.selectedMaterial)}`
        : "";
    },
  };
}
