function ProgressVert({ prog }: { prog: number }) {
  // max progress is 50
  const progress = `${prog * 2}%`;
  return (
    <div className="h-full rounded-full w-7">
      <div
        style={{ height: progress }}
        className={"h-full hover:bg-green-400 bg-green-100 rounded-full"}
      ></div>
    </div>
  );
}

export default ProgressVert;
