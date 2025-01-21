import { Button } from '../ui/button';

const DownloadCV = () => {
    return   <li>
    {" "}
    <a href="/resume/resume.pdf" download className="xl:text-[21px]">
      <Button className="xl:h-[52px] xl:w-[188px] xl:text-2xl">
        Download CV
      </Button>
    </a>
  </li>
};

export default DownloadCV;