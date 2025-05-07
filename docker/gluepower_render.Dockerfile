FROM python:3.11

WORKDIR /app

# Install Langflow from source
COPY . .

RUN pip install -r requirements.txt
RUN pip install exa_py

CMD ["python", "-m", "langflow", "run"]
