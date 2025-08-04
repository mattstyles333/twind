.PHONY: hugo-build hugo-serve hugo-check install-hugo hugo-clean hugo-restart

# Check if Hugo is installed
hugo-check:
	@which hugo > /dev/null || (echo "Hugo is not installed. Please install Hugo first." && echo "Visit: https://gohugo.io/installation/" && exit 1)

# Install Hugo (Linux/Ubuntu)
install-hugo:
	@echo "Installing Hugo..."
	sudo snap install hugo

# Build Hugo site
hugo-build: hugo-check
	hugo -s hugo

# Serve Hugo development server
hugo-serve: hugo-check
	hugo server -s hugo --bind=0.0.0.0 --port=1313 --buildDrafts --buildFuture

# Clean Hugo cache and rebuild
hugo-clean: hugo-check
	hugo -s hugo --gc --cleanDestinationDir

# Restart Hugo server (kill existing and start new)
hugo-restart:
	@pkill -f "hugo server" || true
	@sleep 1
	make hugo-serve

