import React from 'react';
import Button from './Button';

const Table = ({list, pattern, onDismiss}) =>
    <div>
        {list.filter(isSearched(pattern)).map(item =>
            <div key={item.objectID}>
                <span>
                    <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <span>
                    <Button onClick={() => onDismiss(item.objectID)}>
                        Отбросить
                    </Button>
                </span>
            </div>
        )}
    </div>;

function isSearched(searchTerm) {
    return function (item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
}

export default Table;