import { useId } from 'react';

export default function UseIdHook() {
    const id = useId();
    const id2 = useId();

    console.log(id);

    return (
        <div id={id}>
            Elemento único
            <div id={id2}>Elemento 2</div>
        </div>
    );
}