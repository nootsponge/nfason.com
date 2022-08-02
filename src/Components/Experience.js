function Experience() {
  var currentYear = new Date().getFullYear();
  const formatter = new Intl.RelativeTimeFormat();

  var jsTime = formatter.format(2021 - currentYear, "year").slice(0, -4);
  var reactTime = formatter.format(2021 - currentYear, "year").slice(0, -4);
  var csharpTime = formatter.format(2020 - currentYear, "year").slice(0, -4);
  var phpTime = formatter.format(2018 - currentYear, "year").slice(0, -4);
  var sqlTime = formatter.format(2018 - currentYear, "year").slice(0, -4);
  var dockerTime = formatter.format(2021 - currentYear, "year").slice(0, -4);
  var k8sTime = formatter.format(2021 - currentYear, "year").slice(0, -4);
  var linuxTime = formatter.format(2018 - currentYear, "year").slice(0, -4);

  return (
    <>
      <h3>SKILLS / TECHNOLOGIES / LANGUAGES</h3>
      <ul class="end">
        <li>JavaScript/TypeScript - {jsTime} experience - 9/10</li>
        <li>React - {reactTime} experience - 9/10</li>
        <li>C# / .NET - {csharpTime} experience - 8/10</li>
        <li>PHP - {phpTime} experience - 9.5/10</li>
        <li>SQL / Databases - {sqlTime} experience - 9/10</li>
        <li>Docker - {dockerTime} experience - 8/10</li>
        <li>Kubernetes / Helm - {k8sTime} experience - 7/10</li>
        <li>Linux - {linuxTime} experience - 8/10</li>
      </ul>
    </>
  );
}

export default Experience;
