FROM langflowai/langflow:latest

# Install custom package directly (exa_py for example)
RUN pip install exa_py

ENTRYPOINT ["python", "-m", "langflow", "run"]
