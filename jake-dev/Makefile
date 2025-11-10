.PHONY: serve stop clean

# Default port
PORT ?= 1313

# Check if Hugo is installed
hugo-check:
	@which hugo > /dev/null || (echo "Hugo is not installed. Please install Hugo first." && echo "Visit: https://gohugo.io/installation/" && echo "Or run: make install-hugo" && exit 1)

# Clean: kill any process using the port
clean:
	@echo "Clearing port $(PORT)..."
	@pid=$$(lsof -ti:$(PORT) 2>/dev/null | head -1); \
	if [ -n "$$pid" ]; then \
		kill -TERM $$pid 2>/dev/null || true; \
		sleep 1; \
		kill -9 $$pid 2>/dev/null || true; \
	fi
	@pkill -TERM -f "hugo server" 2>/dev/null || true
	@sleep 1
	@echo "Port $(PORT) is clear"

# Serve using Hugo (runs clean first)
serve: hugo-check clean
	@echo "Copying jake-dev files to Hugo static directory..."
	@cp -f static/*.html ../hugo/static/ 2>/dev/null || true
	@echo "Starting Hugo server on http://localhost:$(PORT)"
	@echo "Access search.html at: http://localhost:$(PORT)/search.html"
	@cd ../hugo && hugo server --bind=0.0.0.0 --port=$(PORT) --buildDrafts --buildFuture

# Stop the server (if running)
stop:
	@echo "Stopping Hugo server on port $(PORT)..."
	@fuser -k $(PORT)/tcp 2>/dev/null || true
	@pkill -f "hugo server" 2>/dev/null || true
	@sleep 1
	@echo "Server stopped"

