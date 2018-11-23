import React from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';
import SORTS from '../../actions/Sorts';
import Sort from '../Sort';

const Table = ({list, sortKey, isSortReverse, onSort, onDismiss}) => {
    const sortedList = SORTS[sortKey](list);
    const reverseSortedList = isSortReverse ? sortedList.reverse() : sortedList;

    return <div className="table">
        <div className="table-header">
            <span style={{width: '40%'}}>
                <Sort
                    sortKey={'TITLE'}
                    onSort={onSort}
                    activeSortKey={sortKey}
                >
                Заголовок
                </Sort>
            </span>
            <span style={{width: '30%'}}>
                <Sort
                    sortKey={'AUTHOR'}
                    onSort={onSort}
                    activeSortKey={sortKey}
                >
                Автор
                </Sort>
            </span>
            <span style={{width: '10%'}}>
                <Sort
                    sortKey={'COMMENTS'}
                    onSort={onSort}
                    activeSortKey={sortKey}
                >
                    Комментарии
                </Sort>
            </span>
            <span style={{width: '10%'}}>
                <Sort
                    sortKey={'POINTS'}
                    onSort={onSort}
                    activeSortKey={sortKey}
                >
                Очки
                </Sort>
            </span>
            <span style={{width: '10%'}}>
                Архив
            </span>
        </div>
        {reverseSortedList.map(item =>
            <div key={item.objectID} className="table-row">
                <span>
                    <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <span>
                    <Button
                        onClick={() => onDismiss(item.objectID)}
                        className="button-inline"
                    >
                        Отбросить
                    </Button>
                </span>
            </div>
        )}
    </div>;
};

Table.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            objectID: PropTypes.string.isRequired,
            author: PropTypes.string,
            url: PropTypes.string,
            num_comments: PropTypes.number,
            points: PropTypes.number,
        })
    ).isRequired,
    sortKey: PropTypes.instanceOf(SORTS),
    isSortReverse: PropTypes.bool.isRequired,
    onSort: PropTypes.func.isRequired,
    onDismiss: PropTypes.func.isRequired,
};

export default Table;