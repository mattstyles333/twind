import os
import time
import traceback
from jinja2 import Environment, FileSystemLoader
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

# Function to render Jinja templates
def render_template(template_path, context, output_path):
    try:
        template_dir = os.path.dirname(template_path)
        src_dir = 'src'
        search_paths = [template_dir, src_dir]
        # print(f"Searching for templates in: {search_paths}")
        env = Environment(loader=FileSystemLoader(search_paths))
        
        template_name = os.path.basename(template_path)
        # print(f"Trying to load template: {template_name}")
        
        template = env.get_template(template_name)
        rendered_html = template.render(context)

        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        with open(output_path, 'w') as file:
            file.write(rendered_html)

        print(f"Generated: {output_path}")
    except Exception as e:
        print(f"Error rendering template {template_path}: {str(e)}")
        traceback.print_exc()

# New function to generate all pages and remove obsolete ones
def sync_pages():
    src_dir = 'src'
    static_dir = 'static'
    
    try:
        # Generate new pages
        for root, _, files in os.walk(src_dir):
            for file in files:
                if file.endswith('.html'):
                    template_path = os.path.join(root, file)
                    relative_path = os.path.relpath(template_path, src_dir)
                    output_path = os.path.join(static_dir, relative_path)
                    
                    context = {'title': 'Generated Page'}
                    render_template(template_path, context, output_path)
        
        # Remove obsolete pages
        for root, _, files in os.walk(static_dir):
            for file in files:
                if file.endswith('.html'):
                    static_path = os.path.join(root, file)
                    relative_path = os.path.relpath(static_path, static_dir)
                    src_path = os.path.join(src_dir, relative_path)
                    
                    if not os.path.exists(src_path):
                        try:
                            os.remove(static_path)
                            print(f"Removed obsolete file: {static_path}")
                        except Exception as e:
                            print(f"Error removing file {static_path}: {str(e)}")
                            traceback.print_exc()
    except Exception as e:
        print(f"Error during sync_pages: {str(e)}")
        traceback.print_exc()

# Event handler for directory changes
class TemplateChangeHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if event.src_path.endswith((".html", ".css")):
            print(f"Detected change in {event.src_path}")
            try:
                template_path = event.src_path
                relative_path = os.path.relpath(template_path, 'src')
                output_path = os.path.join('static', relative_path)

                context = {'title': 'Generated Page'}
                render_template(template_path, context, output_path)
            except Exception as e:
                print(f"Error handling file change {event.src_path}: {str(e)}")
                traceback.print_exc()

# Watch the src directory for changes
def start_watching():
    # Sync pages on startup
    sync_pages()

    event_handler = TemplateChangeHandler()
    observer = Observer()
    observer.schedule(event_handler, path='src', recursive=True)
    observer.start()
    print("Watching for changes in 'src/'...")

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()

if __name__ == "__main__":
    start_watching()
