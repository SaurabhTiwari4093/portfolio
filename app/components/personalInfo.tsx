
function PersonalInfo(props: any) {
  return (
    <div className="flex gap-4 justify-between py-4 px-4 bg-gray-100 border rounded">
      <div className="text-gray-600 font-semibold">{props.label}</div>
      <div>{props.value}</div>
    </div>
  );
}

export default PersonalInfo;
