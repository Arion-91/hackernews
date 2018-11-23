import React, {Component} from 'react';
import classNames from 'classnames';
import Button from '../Button';

class Sort extends Component {
    render() {
        const { sortKey, activeSortKey, onSort, children } = this.props;
        const sortClass = classNames(
            'button-inline',
            {'button-active': sortKey === activeSortKey}
        );

        return (
            <Button
                onClick={() => onSort(sortKey)}
                className={sortClass}
            >
                {children}
            </Button>
        );
    }
}

export default Sort;