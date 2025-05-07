FROM python:3.11

WORKDIR /app

# Copy your Langflow fork files
COPY . .

# Install Langflow from source (pyproject.toml)
RUN pip install .

# Force stable ElevenLabs version (avoid broken versions and PyPI issues)
RUN pip install "elevenlabs==1.55.0"

# Install exa_py for your custom components
RUN pip install exa_py

# Run Langflow
CMD ["python", "-m", "langflow", "run"]
