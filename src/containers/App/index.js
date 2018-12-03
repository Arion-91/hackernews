import React, {Component} from 'react';
import './index.css';
import Search from '../../components/Search';
import Table from '../../components/Table';
import Button from "../../components/Button";
import {connect} from "react-redux";
import {searchWrite, searchSubmit} from "../../actions/Search";
import {getMoreArticles, dismissArticle} from "../../actions/Article";

class App extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }

    fetchSearchTopStories(searchKey, page = 0) {
        const { results, getMoreArticles } = this.props;

        if (!results || !results[searchKey] || results[searchKey].page < page) {
            getMoreArticles(searchKey, page);
        }
    }

    onSearchSubmit(event) {
        const { searchKey, searchTerm, searchSubmit } = this.props;
        searchSubmit();

        if (searchTerm !== searchKey) {
            this.fetchSearchTopStories(searchTerm);
        }

        event.preventDefault();
    }

    componentDidMount() {
        this._isMounted = true;
        this.fetchSearchTopStories(this.props.searchKey);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    onDismiss(id) {
        const { searchKey, dismissArticle } = this.props;
        dismissArticle(searchKey, id);
    };

    onSearchChange(event) {
        const { searchWrite } = this.props;
        searchWrite(event.target.value);
    }

    render() {
        const { searchKey, searchTerm } = this.props;
        const { results, isLoading, error } = this.props;
        const page = (results && results[searchKey] && results[searchKey].page) || 0;
        const list = (results && results[searchKey] && results[searchKey].hits) || [];

        if (error) {
            return <p>Что-то произошло не так.</p>
        }

        return (
            <div className='page'>
                <div className="interactions">
                    <Search
                        value={searchTerm}
                        onChange={(event) => this.onSearchChange(event)}
                        onSubmit={(event) => this.onSearchSubmit(event)}
                    >
                        Поиск
                    </Search>
                </div>
                { error
                    ? <div className='interactions'>
                        <p>Something went wrong.</p>
                    </div>
                    : <Table
                        list={list}
                        onDismiss={this.onDismiss}
                    />
                }
                <div className="interactions">
                    <ButtonWithLoading
                        isLoading={isLoading}
                        onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}
                    >
                        Больше историй
                    </ButtonWithLoading>
                </div>
            </div>
        );
    }
}
//
const Loading = () => <div>Загрузка ...</div>;

const withLoading = (Component) => ({ isLoading, ...rest }) =>
    isLoading
        ? <Loading/>
        : <Component { ...rest }/>;

const ButtonWithLoading = withLoading(Button);

const mapStateToProps = store => ({
    searchKey: store.search.searchKey,
    searchTerm: store.search.searchTerm,
    results: store.articles.results,
    isLoading: store.articles.isLoading,
    error: store.articles.error,
});

const mapDispatchToProps = dispatch => ({
    searchWrite: key => dispatch(searchWrite(key)),
    searchSubmit: () => dispatch(searchSubmit()),
    getMoreArticles: (key, page) => dispatch(getMoreArticles(key, page)),
    dismissArticle: (searchKey, ID) => dispatch(dismissArticle(searchKey, ID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

export {
    Button,
    Search,
    Table
}