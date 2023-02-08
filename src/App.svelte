<script>
	import FeedbackForm from './components/FeedbackForm.svelte'
	import FeedbackList from './components/FeedbackList.svelte'
	import FeedbackStats from './components/FeedbackStats.svelte'
	let feedback = [
		{
			id: 1,
			rating: 8,
			text: 'First of all, welcome to Linux! I, too, transferred from Mac to Linux years ago, and I think it is a great way to transition.'
		},
		{
			id: 2,
			rating: 10,
			text: 'First of all, welcome to Linux! I, too, transferred from Mac to Linux years ago, and I think it is a great way to transition.'
		},
		{
			id: 3,
			rating: 6,
			text: 'First of all, welcome to Linux! I, too, transferred from Mac to Linux years ago, and I think it is a great way to transition.'
		}
	]

	

	const deleteFeedback = (e) => { 
		const itemId = e.detail
		feedback = feedback.filter((item) => item.id != itemId)
	}
	const addFeedback = (e) => {
		const newFeedback = e.detail
		feedback = [newFeedback, ...feedback]
	}
	
</script>

<main class='container'>
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList />
</main>

<style>
	
</style>