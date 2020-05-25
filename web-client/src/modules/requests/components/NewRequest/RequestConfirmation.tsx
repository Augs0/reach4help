import { Modal, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import stayAtHomeLottieJson from 'src/assets/lotties/stay-at-home.json';
import LoadingIndicator from 'src/components/LoadingIndicator/LoadingIndicator';
import TitleWithAddon from 'src/components/TitleWithAddon/TitleWithAddon';
import styled from 'styled-components';

import { COLORS } from '../../../../theme/colors';

const { Text } = Typography;

const Footer = styled.div`
  background-color: ${COLORS.backgroundLightOrange};
  padding: 1em 1em;
  text-align: center;
  margin: 0 -24px -24px;
`;

const OrangeP = styled(Text)`
  color: ${COLORS.highlight};
`;

const SubtitleP = styled.div`
  font-size: 1.1em;
  font-weight: 600;
  text-align: center;
  margin-top: 28px;
`;

const RememberInfoP = styled.p`
  margin-top: 0.5em;
`;

const RequestConfirmation: React.FC<RequestConfirmationProps> = ({
                                                           showModal,
                                                           closeModal,
                                                         }) => {
  const { t } = useTranslation();

  return (
    <Modal
      style={{ top: '64px', padding: 0 }}
      visible={showModal}
      onCancel={closeModal}
      footer={null}
    >
      <>
        <TitleWithAddon level={1} addonBottom="-16px">{t('newRequestSuccess.title')}</TitleWithAddon>
        <SubtitleP>{t('newRequestSuccess.info')}</SubtitleP>
        <LoadingIndicator lottieJson={stayAtHomeLottieJson} />
        <Footer>
          <OrangeP>{t('newRequestSuccess.remember')}</OrangeP>
          <RememberInfoP>{t('newRequestSuccess.remember_info')}</RememberInfoP>
        </Footer>
      </>
    </Modal>
  );
};

interface RequestConfirmationProps {
  showModal: boolean;
  closeModal: () => void;
}

export default RequestConfirmation;
