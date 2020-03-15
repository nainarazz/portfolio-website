import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export const Meta = props => {
    return (
        <Head>
            <title key="title">{props.title}</title>
            <meta key="description" name="description" content={props.description} />
            <meta key="og:type" name="og:type" content={props.openGraph.type} />
            <meta key="og:title" name="og:title" content={props.openGraph.title} />
            <meta
                key="og:description"
                name="og:description"
                content={props.openGraph.description}
            />
            <meta key="og:url" name="og:url" content={props.openGraph.url} />
            <meta key="og:image" name="og:image" content={props.openGraph.image} />
        </Head>
    );
};

Meta.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    openGraph: PropTypes.object,
    children: PropTypes.node,
};
