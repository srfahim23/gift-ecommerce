import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2c1810] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#e31837]">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#e31837]">Track Order</a></li>
              <li><a href="#" className="hover:text-[#e31837]">Shipping Info</a></li>
              <li><a href="#" className="hover:text-[#e31837]">Returns</a></li>
              <li><a href="#" className="hover:text-[#e31837]">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#e31837]">Our Story</a></li>
              <li><a href="#" className="hover:text-[#e31837]">Careers</a></li>
              <li><a href="#" className="hover:text-[#e31837]">Press</a></li>
              <li><a href="#" className="hover:text-[#e31837]">Blog</a></li>
              <li><a href="#" className="hover:text-[#e31837]">Affiliates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Gift Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#e31837]">Gift Cards</a></li>
              <li><a href="#" className="hover:text-[#e31837]">Gift Wrapping</a></li>
              <li><a href="#" className="hover:text-[#e31837]">Corporate Gifts</a></li>
              <li><a href="#" className="hover:text-[#e31837]">Gift Registry</a></li>
              <li><a href="#" className="hover:text-[#e31837]">Bulk Orders</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <p className="mb-4">Subscribe to our newsletter for exclusive offers and gift ideas!</p>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-full w-full text-gray-800 focus:outline-none"
              />
              <button className="bg-[#e31837] px-6 rounded-r-full hover:bg-[#c41830]">
                <Mail className="h-5 w-5" />
              </button>
            </div>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 cursor-pointer hover:text-[#e31837]" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-[#e31837]" />
              <Instagram className="h-6 w-6 cursor-pointer hover:text-[#e31837]" />
              <Youtube className="h-6 w-6 cursor-pointer hover:text-[#e31837]" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025  FahimDev . All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#e31837]">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#e31837]">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#e31837]">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;