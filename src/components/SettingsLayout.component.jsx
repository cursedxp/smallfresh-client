export default function SettingsLayout(props) {
  return (
    <div className="settings-layout wrapper mx-auto max-w-screen-2xl">
      <div className="flex">{props.children}</div>
    </div>
  );
}
