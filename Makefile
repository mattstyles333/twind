.PHONY: hugo-build hugo-serve hugo-check install-hugo hugo-clean hugo-restart hugo-dev

# Check if Hugo is installed
hugo-check:
	@which hugo > /dev/null || (echo "Hugo is not installed. Please install Hugo first." && echo "Visit: https://gohugo.io/installation/" && exit 1)

# Install Hugo (Linux/Ubuntu)
install-hugo:
	@echo "Installing Hugo..."
	sudo snap install hugo

# Build Hugo site
hugo-build: hugo-check
	@echo "Building Hugo site..."
	hugo -s hugo --minify

# Serve Hugo development server (enhanced)
hugo-serve: hugo-check
	@echo "Starting Hugo development server..."
	hugo server -s hugo --bind=0.0.0.0 --port=1313 --buildDrafts --buildFuture --disableFastRender --navigateToChanged

# Development server with live reload (faster for development)
hugo-dev: hugo-check
	@echo "Starting Hugo development server with fast render..."
	hugo server -s hugo --bind=0.0.0.0 --port=1313 --buildDrafts --buildFuture --navigateToChanged

# Clean Hugo cache and rebuild
hugo-clean: hugo-check
	@echo "Cleaning Hugo cache..."
	hugo -s hugo --gc --cleanDestinationDir

# Restart Hugo server (kill existing and start new)
hugo-restart:
	@echo "Restarting Hugo server..."
	@pkill -f "hugo server" || true
	@sleep 2
	@make hugo-serve

# Quick restart for development
hugo-quick-restart:
	@echo "Quick restarting Hugo server..."
	@pkill -f "hugo server" || true
	@sleep 1
	@make hugo-dev

# Build and serve (production-like)
hugo-build-serve: hugo-build
	@echo "Building and serving Hugo site..."
	hugo server -s hugo --bind=0.0.0.0 --port=1313 --renderToMemory

