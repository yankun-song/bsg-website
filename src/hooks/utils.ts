function daysFromNow(date: Date): number {
  let days = (date.getTime() - new Date().getTime()) / (1000 * 3600 * 24);
  return Math.floor(days);
}

function useUtils(): [(date: Date) => number] {
  return [daysFromNow];
}

export default useUtils;
