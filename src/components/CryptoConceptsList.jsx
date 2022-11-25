
export const CryptoConceptsList = ({
    name,
    description,
    examples
}) => {
  return (
    <>
    <div className="card">
        <div className="card-body">
            <div className="card-title">{ name }</div>
            <div className="card-text">
                <ul>
                    <li><b>Significa:</b>{ description }</li>
                    <li><b>Algunos ejemplos son:</b> { examples } </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}
