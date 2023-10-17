# docker/Dockerfile

# Use an official FastAPI-Uvicorn base image
FROM tiangolo/uvicorn-gunicorn-fastapi:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the requirements.txt from the docker/python folder into the container
COPY docker/python/requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the FastAPI application and its .env file into the container
COPY app/ .

# Expose port 80 for Uvicorn
EXPOSE 80

# Set the module name for Uvicorn to run
ENV MODULE_NAME=main

# Command to run the application using Uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]