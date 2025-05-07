FROM python:3.11

WORKDIR /app

# Copy Langflow source into container
COPY . .

# Install Langflow from source + custom deps
RUN pip install .
RUN pip install exa_py

# Start Langflow
CMD ["python", "-m", "langflow", "run"]
