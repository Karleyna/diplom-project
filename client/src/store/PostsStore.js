import {makeAutoObservable} from "mobx";

export default class PostStore {
    constructor() {
        this._categorys = []
        this._posts = []
        this._selectedCategory = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setCategories(category) {
        this._categories =category
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
        return this._categories = [
            {id:1, name:'Useful materials'},
            {id:2, name:'Useful materials'},
            {id:3, name:'Useful materials'},
            {id:4, name:'Useful materials'}
        ]
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