import React from 'react';
import {Button, SummaryBox} from '@trussworks/react-uswds';
import {useIntl} from 'gatsby-plugin-intl';

import * as PUBLIC_COPY from '../../data/copy/publicEngage';
import * as styles from './PublicVideoBox.module.scss';

// @ts-ignore
import launchIcon from '/node_modules/uswds/dist/img/usa-icons/launch.svg';

const PublicVideoBox = () => {
  const intl = useIntl();

  return (
    <SummaryBox
      className={styles.publicVideoContainer}
      heading={intl.formatMessage(PUBLIC_COPY.PUBLIC_ENG_VIDEO.TITLE)}>
      {intl.formatMessage(PUBLIC_COPY.PUBLIC_ENG_VIDEO.BODY)}
      <a
        className={styles.publicVideoLink}
        href={`https://www.youtube.com/watch?v=QwHWcXbhw28`}
        target={'_blank'}
        rel="noreferrer"
      >
        <Button
          type="button"
          className={styles.youTubeBtn}
        >
          <div className={styles.buttonContainer}>
            <div className={styles.buttonText}>
              {intl.formatMessage(PUBLIC_COPY.PUBLIC_ENG_VIDEO.BUTTON_TEXT)}
            </div>
            <img
              className={styles.buttonImage}
              src={launchIcon}
              alt={intl.formatMessage(PUBLIC_COPY.PUBLIC_ENG_VIDEO.IMG_ALT_TEXT)}
            />
          </div>
        </Button>
      </a>
    </SummaryBox>
  );
};

export default PublicVideoBox;
