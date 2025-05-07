FROM python:3.11

WORKDIR /app

# Copy Langflow source into container
COPY . .

# Install Langflow + custom deps
RUN pip install -r requirements.txt
RUN pip install exa_py

# Start Langflow
CMD ["python", "-m", "langflow", "run"]
