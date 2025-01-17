import {Helmet} from 'react-helmet-async';

import {useParams} from 'src/routes/hooks';

import {CONFIG} from 'src/config-global';
import {useGetPost} from 'src/actions/blog';

import {PostDetailsView} from 'src/sections/blog/view';

// ----------------------------------------------------------------------

const metadata = {title: `Post details | Dashboard - ${CONFIG.site.name}`};

export default function Page() {
  const {title = ''} = useParams();

  const {post, postLoading, postError} = useGetPost('climate-change-and-its-effects-on-global-food-security');

  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <PostDetailsView post={post} loading={postLoading} error={postError}/>
    </>
  );
}
