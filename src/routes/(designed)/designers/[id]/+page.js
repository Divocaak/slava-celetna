export async function load({ params, fetch }) {
    const { id } = params;

    const response = await fetch('/dynamic/designers.json');
    const data = await response.json();
    const designer = data[id];

    return { id: id, designer: designer };
}