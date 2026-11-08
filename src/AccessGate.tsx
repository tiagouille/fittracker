import {useState,type ReactNode} from 'react';
import {LockKeyhole,Activity} from 'lucide-react';

// Verrou de confort côté navigateur, pas une authentification serveur.
// Le code en clair n'est jamais enregistré dans le dépôt.
const fingerprint='c63edfdf6eacfa45879c0bd2d92362ff24351abc0a666b77aaf57000f8680836';
export function AccessGate({children}:{children:ReactNode}){
 const [open,setOpen]=useState(false),[value,setValue]=useState(''),[error,setError]=useState(''),[busy,setBusy]=useState(false);
 if(open)return <><button className="lock-again" onClick={()=>{setOpen(false);setValue('');}}>Verrouiller</button>{children}</>;
 return <div className="gate"><form onSubmit={async e=>{e.preventDefault();setBusy(true);try{const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('fittracker-gate-v1:'+value));const hex=Array.from(new Uint8Array(digest),v=>v.toString(16).padStart(2,'0')).join('');if(hex===fingerprint){setValue('');setError('');setOpen(true);}else {setError('Code incorrect. Réessaie.');setValue('');}}catch{setError('Ouvre le site en HTTPS dans un navigateur récent.');}finally{setBusy(false);}}}>
 <div className="gate-brand"><Activity/> FitTracker</div><LockKeyhole size={34}/><h1>Ton espace sportif</h1><p>Entre ton code pour continuer.</p><label htmlFor="access-code">Code d’accès</label><input id="access-code" type="password" inputMode="numeric" autoComplete="off" maxLength={16} required autoFocus value={value} onChange={e=>setValue(e.target.value)} aria-describedby="gate-error"/><p id="gate-error" role="status">{error}</p><button className="primary" disabled={busy}>{busy?'Vérification…':'Entrer'}</button>
 </form></div>;
}
