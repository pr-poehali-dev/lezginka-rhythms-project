import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    direction: '',
    experience: '',
    message: ''
  });

  const directions = [
    {
      title: 'Лезгинка',
      description: 'Традиционный кавказский танец с динамичными движениями',
      level: 'Все уровни',
      icon: 'Sparkles' as const,
      price: '2000 ₽/мес'
    },
    {
      title: 'Кавказские барабаны',
      description: 'Обучение игре на традиционных ударных инструментах',
      level: 'Начинающие',
      icon: 'Music' as const,
      price: '2500 ₽/мес'
    },
    {
      title: 'Ансамблевые занятия',
      description: 'Групповые выступления с танцами и музыкой',
      level: 'Продвинутый',
      icon: 'Users' as const,
      price: '3000 ₽/мес'
    }
  ];

  const instructors = [
    {
      name: 'Амина Магомедова',
      specialty: 'Лезгинка, народные танцы',
      experience: '15 лет опыта',
      achievements: 'Лауреат международных конкурсов'
    },
    {
      name: 'Руслан Дагестанов',
      specialty: 'Кавказские барабаны',
      experience: '12 лет опыта',
      achievements: 'Артист Мариинского театра'
    },
    {
      name: 'Зарема Абдуллаева',
      specialty: 'Детские группы',
      experience: '8 лет опыта',
      achievements: 'Педагог высшей категории'
    }
  ];

  const schedule = [
    { day: 'Понедельник', time: '18:00-19:30', group: 'Лезгинка взрослые', level: 'Начинающие' },
    { day: 'Вторник', time: '19:00-20:30', group: 'Барабаны', level: 'Все уровни' },
    { day: 'Среда', time: '17:00-18:00', group: 'Детская лезгинка', level: '6-12 лет' },
    { day: 'Четверг', time: '18:30-20:00', group: 'Лезгинка продвинутые', level: 'Опытные' },
    { day: 'Пятница', time: '19:00-20:30', group: 'Ансамбль', level: 'Все участники' },
    { day: 'Суббота', time: '11:00-12:30', group: 'Семейные занятия', level: 'Все возрасты' }
  ];

  const achievements = [
    'Лауреаты фестиваля "Кавказские ритмы" 2023',
    'Победители конкурса народного танца в СПб 2022',
    'Участники международного фестиваля в Дагестане',
    '150+ выпускников школы',
    'Выступления на главных площадках города'
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setBookingForm({ name: '', phone: '', email: '', direction: '', experience: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                <Icon name="Mountain" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">РИТМЫ ГОР</h1>
                <p className="text-sm text-orange-600">Школа лезгинки и кавказских барабанов</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#directions" className="text-gray-700 hover:text-orange-600 transition-colors">Направления</a>
              <a href="#schedule" className="text-gray-700 hover:text-orange-600 transition-colors">Расписание</a>
              <a href="#instructors" className="text-gray-700 hover:text-orange-600 transition-colors">Преподаватели</a>
              <a href="#pricing" className="text-gray-700 hover:text-orange-600 transition-colors">Стоимость</a>
              <a href="#contacts" className="text-gray-700 hover:text-orange-600 transition-colors">Контакты</a>
            </nav>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Записаться на урок
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Записаться на занятие</DialogTitle>
                  <DialogDescription>
                    Заполните форму и мы свяжемся с вами для записи на пробное занятие
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleBooking} className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Телефон"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                    required
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                  />
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={bookingForm.direction}
                    onChange={(e) => setBookingForm({...bookingForm, direction: e.target.value})}
                    required
                  >
                    <option value="">Выберите направление</option>
                    <option value="lezginka">Лезгинка</option>
                    <option value="drums">Кавказские барабаны</option>
                    <option value="ensemble">Ансамблевые занятия</option>
                  </select>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={bookingForm.experience}
                    onChange={(e) => setBookingForm({...bookingForm, experience: e.target.value})}
                    required
                  >
                    <option value="">Ваш уровень</option>
                    <option value="beginner">Начинающий</option>
                    <option value="intermediate">Средний</option>
                    <option value="advanced">Продвинутый</option>
                  </select>
                  <Textarea
                    placeholder="Дополнительные пожелания"
                    value={bookingForm.message}
                    onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                  />
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                    Отправить заявку
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Почувствуй
                  <span className="text-orange-500 block">РИТМЫ ГОР</span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Изучай традиционные кавказские танцы и музыку в самой атмосферной школе Санкт-Петербурга. 
                  Профессиональные преподаватели, аутентичные костюмы и незабываемые эмоции.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                      <Icon name="Calendar" className="w-5 h-5 mr-2" />
                      Пробное занятие
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Записаться на пробное занятие</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleBooking} className="space-y-4">
                      <Input placeholder="Ваше имя" required />
                      <Input placeholder="Телефон" required />
                      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                        Записаться
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                  <Icon name="Play" className="w-5 h-5 mr-2" />
                  Посмотреть видео
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">150+</div>
                  <div className="text-gray-600">Учеников</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">15+</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">50+</div>
                  <div className="text-gray-600">Выступлений</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/13fae065-c584-4d88-aed7-dfbef8a94b19.jpg" 
                  alt="Танцовщица лезгинки" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-lg font-semibold">Амина Магомедова</div>
                  <div className="text-orange-200">Главный преподаватель</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши направления</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Погрузитесь в мир кавказской культуры через танцы и музыку
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {directions.map((direction, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={direction.icon} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{direction.title}</CardTitle>
                  <CardDescription className="text-gray-600">{direction.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    {direction.level}
                  </Badge>
                  <div className="text-2xl font-bold text-orange-500">{direction.price}</div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        Записаться
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Записаться на {direction.title}</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleBooking} className="space-y-4">
                        <Input placeholder="Ваше имя" required />
                        <Input placeholder="Телефон" required />
                        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                          Записаться
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Расписание занятий</h2>
            <p className="text-xl text-gray-600">Выберите удобное время для занятий</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {schedule.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <div className="font-semibold text-lg text-gray-900">{item.day}</div>
                      <div className="text-orange-600 font-medium">{item.time}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-gray-800 font-medium">{item.group}</div>
                      <Badge variant="outline" className="border-orange-500 text-orange-600">
                        {item.level}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши преподаватели</h2>
            <p className="text-xl text-gray-600">Мастера своего дела с многолетним опытом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{instructor.name}</CardTitle>
                  <CardDescription className="text-orange-600 font-medium">{instructor.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600">{instructor.experience}</p>
                  <p className="text-sm text-gray-500">{instructor.achievements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши достижения</h2>
            <p className="text-xl opacity-90">Гордимся успехами наших учеников</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name="Award" className="w-8 h-8 text-amber-200 flex-shrink-0" />
                  <p className="font-medium">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Галерея</h2>
            <p className="text-xl text-gray-600">Моменты из жизни нашей школы</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img 
                src="/img/020ca84c-ce1c-4014-8bd9-ce95a15089e9.jpg" 
                alt="Кавказские барабаны" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Урок барабанов</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img 
                src="/img/a92a5858-efce-47ab-ac93-dfd64a265185.jpg" 
                alt="Групповые занятия" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Групповые занятия</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg group">
              <img 
                src="/img/13fae065-c584-4d88-aed7-dfbef8a94b19.jpg" 
                alt="Выступление" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Сольное выступление</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Стоимость занятий</h2>
            <p className="text-xl text-gray-600">Выгодные цены на обучение</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Разовое занятие</CardTitle>
                <div className="text-4xl font-bold text-orange-500 mt-4">800 ₽</div>
                <CardDescription>За одно занятие</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-green-500" />
                    Пробное занятие
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-green-500" />
                    Все направления
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-green-500" />
                    Длительность 90 минут
                  </li>
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full border-orange-500 text-orange-600 hover:bg-orange-50" variant="outline">
                      Записаться
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Записаться на разовое занятие</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleBooking} className="space-y-4">
                      <Input placeholder="Ваше имя" required />
                      <Input placeholder="Телефон" required />
                      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                        Записаться
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-shadow border-2 border-orange-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-4 py-1">Популярно</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Абонемент на месяц</CardTitle>
                <div className="text-4xl font-bold text-orange-500 mt-4">2500 ₽</div>
                <CardDescription>8 занятий в месяц</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-green-500" />
                    Экономия 15%
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-green-500" />
                    Все направления
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-green-500" />
                    Заморозка абонемента
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-green-500" />
                    Костюмы в аренду
                  </li>
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      Записаться
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Купить абонемент на месяц</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleBooking} className="space-y-4">
                      <Input placeholder="Ваше имя" required />
                      <Input placeholder="Телефон" required />
                      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                        Записаться
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Индивидуальные занятия</CardTitle>
                <div className="text-4xl font-bold text-orange-500 mt-4">2000 ₽</div>
                <CardDescription>За одно занятие</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-green-500" />
                    Персональный подход
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-green-500" />
                    Гибкое расписание
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-green-500" />
                    Ускоренное обучение
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="w-4 h-4 text-green-500" />
                    Подготовка к конкурсам
                  </li>
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full border-orange-500 text-orange-600 hover:bg-orange-50" variant="outline">
                      Записаться
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Записаться на индивидуальное занятие</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleBooking} className="space-y-4">
                      <Input placeholder="Ваше имя" required />
                      <Input placeholder="Телефон" required />
                      <Textarea placeholder="Цели обучения" />
                      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                        Записаться
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Приходите к нам на занятия в центре Санкт-Петербурга</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="MapPin" className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Адрес</h3>
                </div>
                <p className="text-gray-600">
                  Санкт-Петербург, Невский проспект, 100<br/>
                  м. Маяковская (5 минут пешком)
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Clock" className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Режим работы</h3>
                </div>
                <div className="text-gray-600 space-y-1">
                  <p>Понедельник - Пятница: 17:00 - 21:00</p>
                  <p>Суббота: 11:00 - 18:00</p>
                  <p>Воскресенье: выходной</p>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Phone" className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Связь</h3>
                </div>
                <div className="text-gray-600 space-y-2">
                  <p>Телефон: +7 (812) 123-45-67</p>
                  <p>WhatsApp: +7 (911) 123-45-67</p>
                  <p>Email: info@ritmygor.spb.ru</p>
                </div>
              </Card>
            </div>
            
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Задать вопрос</h3>
              <form onSubmit={handleBooking} className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                  required
                />
                <Input
                  placeholder="Телефон"
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                  required
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                />
                <Textarea
                  placeholder="Ваш вопрос"
                  value={bookingForm.message}
                  onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                  required
                />
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <Icon name="Send" className="w-4 h-4 mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                  <Icon name="Mountain" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">РИТМЫ ГОР</h3>
                  <p className="text-sm text-gray-400">Школа лезгинки и барабанов</p>
                </div>
              </div>
              <p className="text-gray-400">
                Традиционные кавказские танцы и музыка в современном исполнении. 
                Приобщайтесь к богатой культуре Кавказа вместе с нами.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#directions" className="hover:text-orange-500 transition-colors">Направления</a></li>
                <li><a href="#schedule" className="hover:text-orange-500 transition-colors">Расписание</a></li>
                <li><a href="#instructors" className="hover:text-orange-500 transition-colors">Преподаватели</a></li>
                <li><a href="#pricing" className="hover:text-orange-500 transition-colors">Стоимость</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-orange-500 hover:bg-orange-500/10">
                  <Icon name="Instagram" className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-orange-500 hover:bg-orange-500/10">
                  <Icon name="MessageCircle" className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400 hover:text-orange-500 hover:bg-orange-500/10">
                  <Icon name="Youtube" className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 РИТМЫ ГОР. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}