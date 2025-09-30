function BenchMarkItem({ topic, value }) {
  return (
    <>
    {topic === '우리 빌딩' ? (
      <div className="industry-benchmark-item highlight">{topic} <span id="industry_benchmark_value highlight">{value}</span></div>
    ) : (
      <div className="industry-benchmark-item">{topic} <span id="industry_benchmark_value">{value}</span></div>
    )}
    </>
  );
}

export default BenchMarkItem;