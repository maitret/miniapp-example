import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { getEventUrl } from '../../lib/url-builder';
import { ActualEvent } from '../../lib/api/fragments/actual-event';

import Image from '../Image';
import PriceLabel from '../PriceLabel';

import styles from './style.module.css';

export type Props = {
    event: ActualEvent;
    onClick?: () => void;
    className?: string;
};

const EventCardVertical: React.FC<Props> = props => {
    const { id, title, argument, image, tickets } = props.event.eventPreview;
    const ticket = tickets && tickets[0];

    return (
        <Link
            to={getEventUrl(id)}
            className={[styles.card, props.className].filter(Boolean).join(' ')}
            onClick={props.onClick}
        >
            <div className={styles.wrapper}>
                {image && image.eventListCard ? (
                    <Image
                        className={styles.image}
                        alt={title}
                        src={image.eventListCard}
                        src2x={image.eventListCard2x}
                        bgColor={image.bgColor}
                    />
                ) : (
                    <div className={styles.preview} />
                )}
                {ticket && <PriceLabel ticket={ticket} position={'left'} />}
                {image && <div className={styles.overlay} />}
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.annotation}>{argument}</div>
        </Link>
    );
};

export default memo(EventCardVertical);
