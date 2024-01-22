export default function PendingItem(props) {
  return (
    <li className="item" key={props.index}>
      {props.children}
      <span onClick={props.handleFinalizar}> ✓</span>
    </li>
  );
}
