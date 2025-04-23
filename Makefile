VENV = blackout

all: start

start: activate
	@echo "Starting the server..."
	@cd data
	python3 manage.py runserver
	@echo "Starting React frontend..."
	@cd frontend && npm start

stop: stop_server 
	@echo "Stopping the server..."
	@pkill -f "python3 manage.py runserver" || echo "No server process found."
	@pkill -f "node" || echo "No React process found."

activate:
	@echo "Activating the virtual environment..."
	@source $(VENV)/bin/activate
