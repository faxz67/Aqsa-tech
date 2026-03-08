import { MetadataRoute } from 'next';
import { blogPosts } from '../data/blogPosts';
import { services } from '../data/services';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aqsatech.ae';

    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
    }));

    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
    }));

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/services`, lastModified: new Date() },
        { url: `${baseUrl}/blog`, lastModified: new Date() },
        { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
        { url: `${baseUrl}/terms-of-service`, lastModified: new Date() },
        ...serviceRoutes,
        ...blogRoutes,
    ];
}
