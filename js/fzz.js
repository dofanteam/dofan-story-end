//这是要遍历时间轴的数据
var dimeAxis=[{
	date:'2019 . 5',
	title:'互娱时代科技宣布成立新站Cosz，逗帆社社员全部合并到新的项目组，逗帆社就此彻底解散',
	achievement:''
},{
	date:'2019 . 4',
	title:'维帆项目组从逗帆社中完全独立，冷鱼闲风担任维帆社社长',
	achievement:''
},{
	date:'2019 . 3',
	title:'逗帆社资金链断裂，由北京互娱时代网络科技有限公司发起收购，江程训离开逗帆社，由Center001%担任社长',
	achievement:''
},{
	date:'2019 . 1',
	title:'逗帆团队第一次内部改革正式完成，逗帆团队会社更名为逗帆ACG联合会社，江程训出任社长',
	achievement:''
},
{
	date:'2018.12',
	title:'逗帆网荣获12月20日在京举办的世界电子商务大会2018行业最具潜力门户奖',
	achievement:''
},
{
	date:'2018.11',
	title:'逗帆团队不再维护逗帆晓雾服务器主程序，其行为数据全部上传至图灵，逗帆晓雾将转而成为逗帆网动漫形象之一',
	achievement:''
},
{
	date:'2018.10',
	title:'逗帆晓雾AI内核进行最后一次版本更新，并停止用户统计，逗帆晓雾用户量为26w+',
	achievement:''
},
{
	date:'2018 . 9',
	title:'逗帆晓雾下载量突破3w',
	achievement:''
},
{
	date:'2018 . 8',
	title:'逗帆总用户突破20w',
	achievement:'逗帆团队改制为逗帆团队会社，名称仍然为逗帆团队，江程训出任社长'
},
{
	date:'2018 . 7',
	title:'逗帆社区（www.dofan.cn）开始公测，主打二次元各类内容',
	achievement:'逗帆晓雾2.0发布'
},
{
	date:'2018 . 6',
	title:'逗帆晓雾APP下载量突破2w',
	achievement:''
},
{
	date:'2018 . 4',
	title:'逗帆晓雾APP下载量突破1w',
	achievement:''
},
{
	date:'2018 . 3',
	title:'逗帆总用户突破10w',
	achievement:''
},
{
	date:'2018 . 2',
	title:'逗漫网因资金问题正式关闭，感谢大家的支持',
	achievement:''
},
{
	date:'2017.12',
	title:'逗帆ACG更名为逗漫网',
	achievement:''
},
{
	date:'2017.11',
	title:'逗帆小说网因资金问题正式关闭，感谢大家的支持',
	achievement:'逗帆总用户突破1w'
},
{
	date:'2017 . 8',
	title:'逗帆小说网正式发布，主打网文阅读',
	achievement:'逗帆ACG正式发布，主打二次元资讯'
},
{
	date:'2017 . 7',
	title:'代号Ofter的人工智能发布1.0正式版本，名称为逗帆晓雾',
	achievement:''
},
{
	date:'2017 . 6',
	title:'轻水卸任逗帆团队队长，江程训担任逗帆团队队长',
	achievement:''
},
{
	date:'2017 . 5',
	title:'代号为Ofter的人工智能开始公测',
	achievement:''
},
{
	date:'Be born',
	title:'2017年5月6日，逗帆团队正式成立，轻水担任队长',
	achievement:''
},
]
//以下是样式，一般不用改动，看不懂就算了，反正到时候都要重写
$(function(){
	$.each(dimeAxis,function(i,e){
		var html='<li class="time-axis-item">'+
			'<div class="time-axis-date">'+e.date+'<span></span></div>'+
			'<div class="time-axis-title">'+e.title+'</div>'+
			'<p class="time-axis-achievement">'+e.achievement+'</p>'+
			'</li>';
		$('.time-axis').append(html);
	});
});
