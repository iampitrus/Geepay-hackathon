function ProgressTrack({ prog, color }: { prog: number; color: string }) {
  const progress = `${prog * 10}%`;
  return (
    <div className="w-full my-3 bg-gray-200 rounded-full h-2.5">
      <div
        style={{ width: progress, backgroundColor: color }}
        className={"h-full rounded-full"}
      ></div>
    </div>
  );
}

export default ProgressTrack;
