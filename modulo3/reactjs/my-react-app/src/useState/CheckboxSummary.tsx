
import { useState } from 'react';

export default function CheckboxSummary() {
    const [checked, setChecked] = useState({ a: false, b: false, c:false });

    return (
        <div>
            <label><input
                type="checkbox"
                checked={checked.a}
                onChange={() => setChecked({ ...checked, a: !checked.a })} /> A</label>
            <label><input
                type="checkbox"
                checked={checked.b}
                onChange={() => setChecked({ ...checked, b: !checked.b })} /> B</label>
            <label><input
                type="checkbox"
                checked={checked.c}
                onChange={() => setChecked({ ...checked, c: !checked.c })} /> C</label>
            <p>Seleccionado:
                {Object.entries(checked)
                    .filter(([, v]) => v).map(([k]) => k).join(', ') || 'ninguno'}</p>
        </div>
    );
}
