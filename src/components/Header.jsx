export default function Header({ text = "Imagoller" }) {
    return (
        <h1 className="text-5xl text-center p-2">
            {text}
        </h1>
    )
}