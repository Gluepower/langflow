FROM langflowai/langflow:latest

# Install extra requirements
COPY ./langflow/requirements.local.txt /tmp/requirements.local.txt
RUN pip install -r /tmp/requirements.local.txt

# Start Langflow
ENTRYPOINT ["python", "-m", "langflow", "run"]
