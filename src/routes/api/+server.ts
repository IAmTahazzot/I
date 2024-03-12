export function GET() {
	return new Response(
		JSON.stringify({
			read_the_story: 'https://tahazzot.me/my-story/',
			story: 'Once upon a time...',
			signature: 'Tahazzot'
		})
	);
}