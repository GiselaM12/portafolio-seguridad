from fpdf import FPDF
import os

class ActivityPDF(FPDF):
    def header(self):
        # Background color for header
        self.set_fill_color(3, 7, 18) # #030712
        self.rect(0, 0, 210, 40, 'F')
        
        self.set_font('Courier', 'B', 16)
        self.set_text_color(167, 139, 250) # violet-400
        self.cell(0, 10, 'REPORTE FORENSE DE CIBERSEGURIDAD', ln=True, align='C')
        
        self.set_font('Courier', '', 10)
        self.set_text_color(255, 255, 255)
        self.cell(0, 10, 'LOG-03: INTERPRETACION DE REGLAS IPTABLES', ln=True, align='C')
        self.ln(10)

    def footer(self):
        self.set_y(-15)
        self.set_font('Courier', 'I', 8)
        self.set_text_color(128, 128, 128)
        self.cell(0, 10, f'Pagina {self.page_no()} | CONFIDENCIAL - NIVEL 5', 0, 0, 'C')

def generate_act03_pdf():
    pdf = ActivityPDF()
    pdf.set_margins(15, 15, 15)
    pdf.add_page()
    
    # Metadata
    pdf.set_font('Courier', 'B', 12)
    pdf.set_text_color(139, 92, 246)
    pdf.cell(0, 10, "INFORMACION DEL AGENTE", ln=True)
    
    pdf.set_font('Courier', '', 10)
    pdf.set_text_color(0, 0, 0)
    pdf.cell(50, 8, "ESTUDIANTE:", border=0)
    pdf.cell(0, 8, "Moreno Solis Gisela Geraldine", ln=True)
    pdf.cell(50, 8, "DOCENTE:", border=0)
    pdf.cell(0, 8, "Mtro. Servando Lopez Contreras", ln=True)
    pdf.cell(50, 8, "FECHA:", border=0)
    pdf.cell(0, 8, "2026-02-20", ln=True)
    pdf.ln(10)
    
    # Introduction
    pdf.set_font('Courier', 'B', 12)
    pdf.set_text_color(139, 92, 246)
    pdf.cell(0, 10, "1. IDENTIFICADOR: NETFILTER & IPTABLES", ln=True)
    pdf.set_font('Courier', '', 10)
    pdf.set_text_color(50, 50, 50)
    pdf.multi_cell(180, 6, "Iptables es la herramienta de espacio de usuario utilizada para configurar las tablas de filtrado de paquetes del kernel de Linux (Netfilter). Es la primera linea de defensa en servidores Linux.")
    pdf.ln(5)
    
    # Table of Tables
    pdf.set_font('Courier', 'B', 11)
    pdf.set_text_color(139, 92, 246)
    pdf.cell(0, 10, "CONCEPTOS FUNDAMENTALES (TABLAS)", ln=True)
    
    # Table Header
    pdf.set_fill_color(30, 41, 59)
    pdf.set_text_color(255, 255, 255)
    pdf.set_font('Courier', 'B', 9)
    pdf.cell(30, 8, "TABLA", border=1, fill=True)
    pdf.cell(80, 8, "PROPOSITO", border=1, fill=True)
    pdf.cell(70, 8, "EJEMPLO", border=1, fill=True, ln=True)
    
    # Table Body
    pdf.set_text_color(0, 0, 0)
    pdf.set_font('Courier', '', 8)
    data = [
        ["FILTER", "Filtrado de paquetes.", "Permitir / Bloquear trafico."],
        ["NAT", "Traduccion de direcciones.", "Uso de diferentes dispositivos."],
        ["MANGLE", "Modificacion avanzada.", "Cambio de cabeceras."],
        ["RAW", "Excepciones al seguimiento.", "Acceso sin inspeccion."],
        ["SECURITY", "Aplica paquetes de seguridad.", "Seguridad avanzada."]
    ]
    for row in data:
        pdf.cell(30, 8, row[0], border=1)
        pdf.cell(80, 8, row[1], border=1)
        pdf.cell(70, 8, row[2], border=1, ln=True)
    
    pdf.ln(5)
    
    # Anatomy
    pdf.set_font('Courier', 'B', 12)
    pdf.set_text_color(139, 92, 246)
    pdf.cell(0, 10, "2. ANATOMIA TECNICA DE UN COMANDO", ln=True)
    pdf.set_fill_color(20, 20, 20)
    pdf.set_text_color(255, 255, 255)
    pdf.set_font('Courier', '', 9)
    pdf.multi_cell(180, 8, "iptables -A INPUT -p tcp -m multiport --dports 80,443 -j ACCEPT", border=1, align='C', fill=True)
    pdf.set_text_color(50, 50, 50)
    pdf.ln(2)
    pdf.multi_cell(180, 5, "-A INPUT: Añadir regla | -p tcp: Protocolo | --dports 80,443: Puertos Destino | -j ACCEPT: Permitir")
    pdf.ln(5)
    
    # Exercises
    pdf.set_font('Courier', 'B', 12)
    pdf.set_text_color(139, 92, 246)
    pdf.cell(0, 10, "3. ANALISIS DE POLITICAS (EJERCICIOS)", ln=True)
    
    exercises = [
        ["Acceso Seguro via SSH", "Permitir conexion SSH desde 192.168.1.50.", "iptables -A INPUT -p tcp -s 192.168.1.50 --dport 22 -j ACCEPT"],
        ["Hardening Web", "Abrir puertos 80 y 443 para trafico publico.", "iptables -A INPUT -p tcp -m multiport --dports 80,443 -j ACCEPT"],
        ["Control de Estados", "Permitir trafico ESTABLISHED/RELATED.", "iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT"],
        ["Politica Drop", "Postura Deny by Default.", "iptables -P INPUT DROP"]
    ]
    
    for ex in exercises:
        pdf.set_font('Courier', 'B', 10)
        pdf.set_text_color(139, 92, 246)
        pdf.cell(0, 7, ex[0], ln=True)
        pdf.set_font('Courier', '', 9)
        pdf.set_text_color(0, 0, 0)
        pdf.multi_cell(180, 5, f"Req: {ex[1]}\nCmd: {ex[2]}")
        pdf.ln(2)
        
    pdf.ln(5)
    pdf.set_font('Courier', 'B', 12)
    pdf.set_text_color(139, 92, 246)
    pdf.cell(0, 10, "4. CONCLUSION", ln=True)
    pdf.set_font('Courier', '', 10)
    pdf.set_text_color(50, 50, 50)
    pdf.multi_cell(180, 6, "El estandar X.800 y el RFC 4949 se complementan para definir la arquitectura de seguridad.")
    
    # Images
    if os.path.exists("public/ACT 03.jfif"):
        pdf.add_page()
        pdf.set_font('Courier', 'B', 12)
        pdf.cell(0, 10, "ANEXO A: EVIDENCIA VISUAL", ln=True)
        try:
            pdf.image("public/ACT 03.jfif", x=15, y=30, w=180)
            if os.path.exists("public/ACT 03.2.jfif"):
                pdf.image("public/ACT 03.2.jfif", x=15, y=140, w=180)
        except Exception as e:
            print(f"Error including image: {e}")

    output_path = "public/176522-ACT03.pdf"
    pdf.output(output_path)
    print(f"PDF generated at: {output_path}")

if __name__ == "__main__":
    generate_act03_pdf()
