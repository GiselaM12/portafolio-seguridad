
import sys
import os
from pypdf import PdfReader
from docx import Document

def extract_pdf(path):
    try:
        reader = PdfReader(path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text
    except Exception as e:
        return f"Error reading PDF {path}: {e}"

def extract_docx(path):
    try:
        doc = Document(path)
        return "\n".join([para.text for para in doc.paragraphs])
    except Exception as e:
        return f"Error reading DOCX {path}: {e}"

files = {
    "Act01": "public/Act01_Equipo1.pdf",
    "Act02": "public/176522-ACT02.pdf",
    "Act04": "public/1765222-act04.pdf",
    "Act05": "public/176522_Act 5.pdf",
    "Act06": "public/176658-act06.docx"
}

with open("extracted_content.txt", "w", encoding="utf-8") as f:
    for act, path in files.items():
        f.write(f"--- {act} ---\n")
        if path.endswith(".pdf"):
            f.write(extract_pdf(path))
        else:
            f.write(extract_docx(path))
        f.write("\n" + "="*50 + "\n")
