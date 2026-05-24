import React, { useState, useEffect, useRef } from 'react';
import { FaTerminal, FaPlay, FaSkullCrossbones, FaNetworkWired, FaKey, FaLinux, FaExclamationTriangle } from 'react-icons/fa';

const Act09Simulator = () => {
    const [terminalHistory, setTerminalHistory] = useState([]);
    const [terminalInput, setTerminalInput] = useState('');
    const [shellUser, setShellUser] = useState('kali@kali');
    const [shellPath, setShellPath] = useState('~');
    const terminalContainerRef = useRef(null);
    const inputRef = useRef(null);

    const promptStr = `${shellUser}:~${shellPath === '~' ? '' : shellPath}$ `;

    // Boot sequence
    useEffect(() => {
        const welcomeLogs = [
            `Linux kali 6.6.9-amd64 #1 SMP PREEMPT_DYNAMIC Kali 6.6.9-1kali1 (2024-01-08) x86_64`,
            `The programs included with the Kali GNU/Linux system are free software;`,
            `the exact distribution terms for each program are described in the`,
            `individual files in /usr/share/doc/*/copyright.`,
            ``,
            `Kali GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent`,
            `permitted by applicable law.`,
            `┌──(kali㉿kali)-[~]`,
            `└─$ echo "Bienvenido al Simulador de Pentesting - My File Server 1"`,
            `Bienvenido al Simulador de Pentesting - My File Server 1`,
            `[SYS] Escribe 'help' para ver los comandos disponibles para el ataque.`
        ];
        setTerminalHistory(welcomeLogs);
    }, []);

    useEffect(() => {
        if (terminalContainerRef.current) {
            terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
        }
    }, [terminalHistory]);

    useEffect(() => {
        // Focus input on mount instead of using autoFocus prop which can cause scroll jumps
        inputRef.current?.focus();
    }, []);

    const executeCommand = (cmdToExecute) => {
        const rawCmd = cmdToExecute.trim();
        const cmd = rawCmd.toLowerCase();
        let response = [];
        
        response.push(`┌──(${shellUser})-[${shellPath}]`);
        response.push(`└─$ ${rawCmd}`);

        if (cmd) {
            if (cmd === 'help') {
                response.push(
                    `Comandos de simulación disponibles:`,
                    `  help                                   - Muestra este menú.`,
                    `  netdiscover -r 172.16.0.0/16           - Descubre hosts en la red.`,
                    `  nmap -p- 192.168.56.104 -sv            - Escaneo de puertos y servicios.`,
                    `  smbmap -h 192.168.56.104               - Enumera recursos SMB.`,
                    `  cat /var/www/html/readme.txt           - Visualiza archivo web expuesto.`,
                    `  ssh smbuser@192.168.56.104             - Inicia sesión remota.`,
                    `  uname -a                               - Muestra versión del kernel.`,
                    `  gcc 40616.c -o equipo1 -pthread        - Compila exploit Dirty COW.`,
                    `  ./equipo1                              - Ejecuta el exploit.`,
                    `  whoami                                 - Verifica tu usuario actual.`,
                    `  clear                                  - Limpia la terminal.`
                );
            } else if (cmd === 'clear') {
                setTerminalHistory([]);
                return;
            } else if (cmd === 'netdiscover -r 172.16.0.0/16') {
                response.push(
                    ` Currently scanning: 172.16.0.0/16   |   Screen View: Unique Hosts`,
                    ` 3 Captured ARP Req/Rep packets, from 3 hosts.   Total size: 180`,
                    ` _____________________________________________________________________________`,
                    `   IP            At MAC Address     Count     Len  MAC Vendor / Hostname      `,
                    ` -----------------------------------------------------------------------------`,
                    ` 192.168.56.1    0a:00:27:00:00:0b      1      60  Unknown vendor`,
                    ` 192.168.56.100  08:00:27:0c:43:e8      1      60  PCS Systemtechnik GmbH`,
                    ` 192.168.56.104  08:00:27:cd:29:80      1      60  PCS Systemtechnik GmbH`
                );
            } else if (cmd.includes('nmap -p-') && cmd.includes('192.168.56.104')) {
                response.push(
                    `Starting Nmap 7.95 ( https://nmap.org ) at 2026-03-08 17:19 EDT`,
                    `Nmap scan report for 192.168.56.104`,
                    `Host is up (0.00043s latency).`,
                    `Not shown: 64444 filtered tcp ports (no-response), 79 filtered tcp ports (host-prohibited)`,
                    `PORT      STATE SERVICE     VERSION`,
                    `21/tcp    open  ftp         vsftpd 3.0.2`,
                    `22/tcp    open  ssh         OpenSSH 7.4 (protocol 2.0)`,
                    `80/tcp    open  http        Apache httpd 2.4.6 ((CentOS))`,
                    `111/tcp   open  rpcbind     2-4 (RPC #100000)`,
                    `445/tcp   open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: SAMBA)`,
                    `2049/tcp  open  nfs_acl     3 (RPC #100227)`,
                    `2121/tcp  open  ftp         ProFTPD 1.3.5`,
                    `20048/tcp open  mountd      1-3 (RPC #100005)`,
                    `MAC Address: 08:00:27:CD:29:80 (PCS Systemtechnik/Oracle VirtualBox virtual NIC)`,
                    `Service Info: Host: FILESERVER; OS: Unix`,
                    ` `,
                    `Nmap done: 1 IP address (1 host up) scanned in 93.24 seconds`
                );
            } else if (cmd.includes('smbmap') && cmd.includes('192.168.56.104')) {
                response.push(
                    `    _  _   _    ___  ___      _   ___ `,
                    `   /_\\| | | |  /   \\/___\\/\\/\\/\\ |/___\\`,
                    `  //_\\\\ | | | / /\\ //  //    / /|  // `,
                    ` /  _  \\|_| |/ /_// \\_// /\\/\\/\\ | \\_//`,
                    ` \\_/ \\_/___//___,'\\___/\\/    \\/ \\___/ `,
                    ` `,
                    `SMBMap - Samba Share Enumerator v1.10.7 | Shawn Evans - ShawnDEvans@gmail.com`,
                    ` `,
                    `[*] Detected 1 hosts serving SMB`,
                    `[*] Established 1 SMB connections(s) and 0 authenticated session(s)`,
                    ` `,
                    `[+] IP: 192.168.56.104:445      Name: 192.168.56.104          Status: NULL Session`,
                    `        Disk                                                  Permissions     Comment`,
                    `        ----                                                  -----------     -------`,
                    `        print$                                                NO ACCESS       Printer Drivers`,
                    `        smbdata                                               READ, WRITE     smbdata`,
                    `        smbuser                                               NO ACCESS       smbuser`,
                    `        IPC$                                                  NO ACCESS       IPC Service (Samba 4.9.1)`,
                    `[*] Closed 1 connections`
                );
            } else if (cmd === 'cat /var/www/html/readme.txt' || cmd === 'cat readme.txt') {
                response.push(
                    `My Password is`,
                    `rootroot1`
                );
            } else if (cmd.startsWith('ssh smbuser@192.168.56.104')) {
                setShellUser('smbuser@fileserver');
                setShellPath('');
                response.push(
                    `The authenticity of host '192.168.56.104 (192.168.56.104)' can't be established.`,
                    `ED25519 key fingerprint is SHA256:ccn0TgE4/0XtSpg3oMO2gVNYXrps4Zi+XcBgaDZnW78.`,
                    `Warning: Permanently added '192.168.56.104' (ED25519) to the list of known hosts.`,
                    `smbuser@192.168.56.104's password: [Hidden input: rootroot1]`,
                    `Last login: Thu Feb 20 16:42:21 2026 from 192.168.56.1`
                );
            } else if (cmd === 'uname -a') {
                if (shellUser === 'smbuser@fileserver' || shellUser === 'root@fileserver') {
                    response.push(`Linux fileserver 3.10.0-229.el7.x86_64 #1 SMP Fri Mar 6 11:36:42 UTC 2015 x86_64 x86_64 x86_64 GNU/Linux`);
                } else {
                    response.push(`Linux kali 6.6.9-amd64 #1 SMP PREEMPT_DYNAMIC Kali 6.6.9-1kali1 (2024-01-08) x86_64 GNU/Linux`);
                }
            } else if (cmd.includes('gcc') && cmd.includes('40616.c')) {
                if (shellUser === 'smbuser@fileserver') {
                    response.push(
                        `40616.c: In function 'procselfmemThread':`,
                        `40616.c:99:9: warning: passing argument 2 of 'lseek' makes integer from pointer without a cast [enabled by default]`,
                        `         lseek(f,map,SEEK_SET);`,
                        `         ^`
                    );
                } else {
                    response.push(`bash: gcc: 40616.c: No such file or directory`);
                }
            } else if (cmd === './equipo1') {
                if (shellUser === 'smbuser@fileserver') {
                    setShellUser('root@fileserver');
                    response.push(
                        `DirtyCow root privilege escalation`,
                        `Backing up /usr/bin/passwd.. to /tmp/bak`,
                        `Size of binary: 27832`,
                        `Racing, this may take a while..`,
                        `thread stopped`,
                        `/usr/bin/passwd is overwritten`,
                        `Popping root shell.`,
                        `Don't forget to restore /tmp/bak`,
                        `thread stopped`
                    );
                } else {
                    response.push(`bash: ./equipo1: No such file or directory`);
                }
            } else if (cmd === 'whoami') {
                if (shellUser === 'root@fileserver') response.push('root');
                else if (shellUser === 'smbuser@fileserver') response.push('smbuser');
                else response.push('kali');
            } else {
                response.push(`bash: ${cmd}: command not found`);
            }
        }
        
        setTerminalHistory(prev => [...prev, ...response]);
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevents default form submission or scrolling behavior
            executeCommand(terminalInput);
            setTerminalInput('');
            
            // Re-focus input immediately after command execution
            setTimeout(() => {
                inputRef.current?.focus();
            }, 0);
        }
    };

    return (
        <div className="bg-[#050913]/90 border border-violet-500/20 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.1)] relative">
            {/* Terminal Header */}
            <div className="bg-[#081222]/90 border-b border-violet-500/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20">
                        <FaTerminal />
                    </span>
                    <div>
                        <h4 className="text-white font-mono text-xs font-bold tracking-widest uppercase">
                            SIMULADOR DE ATAQUE DIRIGIDO (PENTEST)
                        </h4>
                        <p className="text-[10px] text-violet-400/80 font-mono tracking-wider flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            INTERACTIVE SHELL - KALI LINUX // TARGET: MY FILE SERVER 1
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Actions / Helpers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-violet-500/20">
                <button onClick={() => { 
                    setTerminalInput('netdiscover -r 172.16.0.0/16'); 
                    setTimeout(() => {
                        const fakeEvent = { key: 'Enter' };
                        setTerminalInput(currentInput => {
                            // We need a ref or bypass state for this hack to work perfectly, but let's do a more robust approach
                            // Instead of hacking the event, let's just extract the execution logic
                            executeCommand('netdiscover -r 172.16.0.0/16');
                            return '';
                        });
                    }, 50); 
                }} className="bg-[#050913] hover:bg-violet-900/20 text-xs font-mono text-gray-400 py-3 flex items-center justify-center gap-2 transition-colors">
                    <FaNetworkWired className="text-violet-500" /> 1. Recon
                </button>
                <button onClick={() => { 
                    setTerminalInput('smbmap -h 192.168.56.104'); 
                    setTimeout(() => {
                        executeCommand('smbmap -h 192.168.56.104');
                        setTerminalInput('');
                    }, 50);
                }} className="bg-[#050913] hover:bg-violet-900/20 text-xs font-mono text-gray-400 py-3 flex items-center justify-center gap-2 transition-colors">
                    <FaPlay className="text-blue-500" /> 2. Enum
                </button>
                <button onClick={() => { 
                    setTerminalInput('ssh smbuser@192.168.56.104'); 
                    setTimeout(() => {
                        executeCommand('ssh smbuser@192.168.56.104');
                        setTerminalInput('');
                    }, 50);
                }} className="bg-[#050913] hover:bg-violet-900/20 text-xs font-mono text-gray-400 py-3 flex items-center justify-center gap-2 transition-colors">
                    <FaKey className="text-amber-500" /> 3. Foothold
                </button>
                <button onClick={() => { 
                    setTerminalInput('./equipo1'); 
                    setTimeout(() => {
                        executeCommand('./equipo1');
                        setTerminalInput('');
                    }, 50);
                }} className="bg-[#050913] hover:bg-violet-900/20 text-xs font-mono text-gray-400 py-3 flex items-center justify-center gap-2 transition-colors">
                    <FaSkullCrossbones className="text-red-500" /> 4. Escalate
                </button>
            </div>

            {/* Terminal Body */}
            <div className="p-6 bg-[#03060c] h-[450px] flex flex-col font-mono text-xs sm:text-sm shadow-inner relative">
                <div ref={terminalContainerRef} className="flex-grow overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-violet-900 pr-2">
                    {terminalHistory.map((line, idx) => {
                        let color = "text-gray-300";
                        if (line.includes('┌──') || line.includes('└─$')) color = shellUser.includes('root') ? "text-red-500 font-bold" : "text-violet-400 font-bold";
                        if (line.includes('rootroot1')) color = "text-red-400 bg-red-900/20 px-1";
                        if (line.includes('[SYS]')) color = "text-cyan-400";
                        if (line.includes('Popping root shell')) color = "text-red-500 font-black animate-pulse text-base";
                        if (line.includes('DirtyCow root privilege escalation')) color = "text-red-400 font-bold";
                        if (line.includes('open')) color = "text-green-400";

                        return (
                            <div key={idx} className={`${color} whitespace-pre-wrap leading-relaxed`}>
                                {line}
                            </div>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-900">
                    <span className={shellUser.includes('root') ? "text-red-500 font-bold" : "text-violet-400 font-bold"}>
                        ┌──({shellUser})-[{shellPath}]<br/>└─$
                    </span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        onKeyDown={handleCommand}
                        spellCheck="false"
                        className="flex-grow bg-transparent text-white focus:outline-none border-none caret-violet-400 font-mono text-sm self-end pb-0.5"
                    />
                </div>
            </div>
            <div className="bg-gray-900/50 p-3 text-center border-t border-violet-500/10">
                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest flex items-center justify-center gap-2">
                    <FaLinux /> Simulador Educativo de Vulnerabilidades (Uso Académico)
                </p>
            </div>
        </div>
    );
};

export default Act09Simulator;
