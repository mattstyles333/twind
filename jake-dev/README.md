# Jake Dev

Simple static HTML file server.

## Usage

Serve static files:
```bash
make serve
```

Access at `http://localhost:8000`

Serve on a different port:
```bash
PORT=3000 make serve
```

Stop the server:
```bash
make stop
```

## Project Structure

```
jake-dev/
├── Makefile          # Build and serve commands
├── static/           # Static HTML files go here
│   └── index.html    # Example entry point
└── README.md         # This file
```


