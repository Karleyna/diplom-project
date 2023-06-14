import {makeAutoObservable} from "mobx";

export default class PostStore {
    constructor() {
        this._categories = []
        this._posts = []
        this._selectedCategory = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 8
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }
    setPosts(posts) {
        this._posts = posts
    }

    setSelectedCategory(category) {
        this.setPage(1)
        this._selectedCategory = category
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get categories() {
        return this._categories

    }

    get posts() {
        return this._posts
    }
    get selectedCategory() {
        return this._selectedCategory
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}