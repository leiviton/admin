import { Avatar } from '@app/blocks/avatars/models/avatar';

export interface Product {
    slug: string;
    name: string;
    img: string;
    category: string;
    price: ProductPrice;
    rating: number;
    details?: ProductDetails;
}

export interface ProductCategory {
    slug: string;
    name: string;
    items?: string[];
}

export interface ProductPrice {
    current: number;
    banned?: number;
}

export interface ProductDetails {
    description: string;
    availability: ProductDetailsAvailability;
    reviews: ProductReviews[];
    specifications: ProductSpecifications[];
}

export interface ProductDetailsAvailability {
    colors?: string[];
    images?: string[];
}

export interface ProductReviews {
    review: number;
    description: string;
    date: number;
    thumbs: ProductReviewThumbs;
    user: Avatar;
}

export interface ProductReviewThumbs {
    up: number;
    down: number;
}

export interface ProductSpecifications {
    name: string;
    description: string;
    items?: ProductSpecificationItem[];
}

export interface ProductSpecificationItem {
    name: string;
    description: string;
}
