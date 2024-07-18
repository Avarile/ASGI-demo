import {Helmet} from 'react-helmet-async';

import {useParams} from 'src/routes/hooks';

import {_jobs} from 'src/_mock/_job';
import {CONFIG} from 'src/config-global';

import {JobDetailsView} from 'src/sections/job/view';

// ----------------------------------------------------------------------

const metadata = {title: `Job details | Dashboard - ${CONFIG.site.name}`};

export default function Page() {
  const {id = ''} = useParams();

  console.log(window.location.pathname)
  const currentJob = _jobs.find((job) => job.id === id);
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <JobDetailsView job={currentJob}/>
    </>
  );
}
