import styles from "./BlogGrid.module.scss";
import BlogCard from "@/components/BlogCard";

export default function BlogGrid({ posts }) {
	return (
		<section className={styles.gridWrapper}>
			<div className={styles.grid}>
				{posts.map((post) => (
					<BlogCard key={post.id} {...post} />
				))}
			</div>
		</section>
	);
}
