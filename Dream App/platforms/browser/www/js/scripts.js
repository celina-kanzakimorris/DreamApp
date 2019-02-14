var app = new Framework7({
	root: '#app', /* this is the app element in html */
	

	routes: [
		{
			path: '/',
			url: 'index.html',
		},
		{
			path: '/page2/',
			url: 'pages/page2.html/',
		}
	]




});


var $$ = Dom7;

var mainView = app.views.create('.view-main');


$$(document).on('page:init', '.page[data-name="page2"]',function(e){
	
});

$(document).ready(function(){
var quoteSource = [
	'<p>You see things; and you say, ‘Why?` But I dream things that never were; and I say, ‘Why not?` -George Bernard Shaw</p>',
	'<p>Life is full of beauty. Notice it. Notice the bumble bee, the small child, and the smiling faces. Smell the rain, and feel the wind. Live your life to the fullest potential, and fight for your dreams. -Ashley Smith </p>',
	'<p>You are never too old to set another goal or to dream a new dream. -C.S. Lewis</p>',
	'<p>What is not started today is never finished tomorrow. -Johann Wolfgang von Goethe</p>',
	'<p>Do not follow where the path may lead. Go instead where there is no path and leave a trail. -Ralph Waldo Emerson</p>',
	'<p>Start where you are. Use what you have. Do what you can. -Arthur Ashe</p>',
	'<p>Dream as if you`ll live forever, live as if you`ll die today. -James Dean</p>',
	'<p>Like success, failure is many things to many people. With positive mental attitude, failure is a learning experience, a rung on the ladder, and a plateau at which to get your thoughts in order to prepare to try again. -W. Clement Stone</p>',
	'<p>No matter where you`re from, your dreams are valid. -Lupita Nyong`o</p>',
	'<p>There are some people who live in a dream world, and there are some who face reality; and then there are those who turn one into the other. -Douglas H. Everett</p>',
	'<p>Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination. -Mae Jemison</p>',
	'<p>A dreamer is one who can only find his way by moonlight, and his punishment is that he sees the dawn before the rest of the world. -Oscar Wilde</p>',
	'<p>Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. -Samuel Beckett</p>',
	'<p>A man is not old until regrets take the place of dreams. -John Barrymore</p>',
	'<p>Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great. -Mark Twain</p>',
	'<p>The only thing that will stop you from fulfilling your dreams is you. -Tom Bradley</p>',
	'<p>Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for. -Epicurus</p>',
	'<p>The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt</p>',
	'<p>Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world. -Harriet Tubman</p>',
	'<p>The only thing worse than starting something and failing … is not starting something. -Seth Godin</p>',
	'<p>You don’t have to see the whole staircase, just take the first step. -Martin Luther King, Jr.</p>',
	'<p>Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice. -Wayne Dyer</p>',
	'<p>Dream no small dreams for they have no power to move the hearts of men. -Johann Wolfgang von Goethe</p>',
	'<p>Yesterday is but today`s memory, tomorrow is today`s dream. -Kahlil Gibran</p>',
	'<p>When I`m old and dying, I plan to look back on my life and say, ‘Wow, that was an adventure,` not, ‘Wow, I sure felt safe.` -Tom Preston-Werner</p>',
	'<p>To accomplish great things, we must not only act, but also dream; not only plan, but also believe. -Anatole France</p>',
	'<p>There is only one thing that makes a dream impossible to achieve: the fear of failure. -Paulo Coelho</p>',
	'<p>It is only when we truly know and understand that we have a limited time on earth – and that we have no way of knowing when our time is up – that we will begin to live each day to the fullest, as if it was the only one we had. -Elizabeth Kubler-Ross</p>',
	'<p>So many of our dreams at first seem impossible, then they seem improbable, and then, when we summon the will, they soon become inevitable. -Christopher Reeve</p>',
	'<p>Remember to celebrate milestones as you prepare for the road ahead. -Nelson Mandela</p>',
	'<p>If you take responsibility for yourself you will develop a hunger to accomplish your dreams. -Les Brown</p>',
	'<p>I have had dreams, and I’ve had nightmares. I overcame the nightmares because of my dreams. -Jonas Salk</p>',
	'<p>The best years of your life are the ones in which you decide your problems are your own. You do not blame them on your mother, the ecology, or the president. You realize that you control your own destiny. -Albert Ellis</p>',
	'<p>Much of the stress that people feel doesn’t come from having too much to do. It comes from not finishing what they started. -David Allen</p>',
	'<p>It may be that those who do most, dream most. -Stephen Butler Leacock</p>',
	'<p>If one advances confidently in the direction of one`s dreams, and endeavors to live the life which one has imagined, one will meet with a success unexpected in common hours. -Henry David Thoreau</p>',
	'<p>Whatever you do, or dream you can, begin it. Boldness has genius and power and magic in it. -Johann Wolfgang von Goethe</p>',
	'<p>Amateurs sit and wait for inspiration, the rest of us just get up and go to work. -Stephen King</p>',
	'<p>Hold fast to dreams for if dreams die, life is a broken-winged bird that cannot fly. -Langston Hughes</p>',
	'<p>Do not be embarrassed by your failures, learn from them and start again. -Richard Branson</p>',
	'<p>If you are not willing to risk the usual, you will have to settle for the ordinary. -Jim Rohn</p>',
	'<p>The key to realizing a dream is to focus not on success but significance – and then even the small steps and little victories along your path will take on greater meaning. Oprah Winfrey</p>',
	'<p>Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. -Earl Nightingale</p>',
	'<p>A year from now you may wish you had started today. -Karen Lamb</p>',
	'<p>I have spread my dreams beneath your feet;Tread softly because you tread on my dreams. -William Butler Yeats</p>',
	'<p>Of all forms of caution, caution in love is perhaps the most fatal to true happiness. -Bertrand Russell</p>',
	'<p>Nothing in the world can take the place of perseverance. Talent will not; nothing is more common than unsuccessful people with talent. Genius will not; unrewarded genius is almost legendary. Education will not; the world is full of educated derelicts. Perseverance and determination alone are omnipotent. -Calvin Coolidge</p>',
	'<p>The indispensable first step to getting the things you want out of life is this: decide what you want. -Ben Stein</p>',
	'<p>Don’t wait. The time will never be just right. -Napoleon Hill</p>',
	'<p>To dare is to lose one’s footing momentarily. To not dare is to lose oneself. -Soren Kierkegaard</p>',
	'<p>Think of many things; do one. -Portuguese proverb</p>',
	'<p>Dreams come true. Without that possibility, nature would not incite us to have them. -John Updike</p>',
	'<p>All men dream: but not equally. Those who dream by night in the dusty recesses of their minds wake in the day to find that it was vanity: but the dreamers of the day are dangerous men, for they may act their dreams with open eyes, to make it possible. -T.E. Lawrence</p>',
	'<p>A journey of a thousand miles must begin with a single step. -Lao Tzu</p>',
	'<p>20 years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. -Mark Twain</p>'
	];
	$("#quoteButton").on("click", function(){
		var rand = Math.floor(Math.random() * 56);
		$("#quoteContainer").html(quoteSource[rand]);
	});
});

